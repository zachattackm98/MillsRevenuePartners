-- Drop old table if it exists
DROP TABLE IF EXISTS contact_submissions;

-- Ensure form_submissions table exists with correct schema
CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Enable public submissions" ON form_submissions;
DROP POLICY IF EXISTS "Enable viewing for authenticated users" ON form_submissions;

-- Create clean policies
CREATE POLICY "Enable public submissions"
  ON form_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable viewing for authenticated users"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure trigger function exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Ensure trigger exists
DROP TRIGGER IF EXISTS update_form_submissions_updated_at ON form_submissions;
CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();