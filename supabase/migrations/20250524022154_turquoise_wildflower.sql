/*
  # Reset and fix form submissions

  1. Changes
    - Drop existing table and recreate with proper structure
    - Set up correct RLS policies
    - Add proper constraints

  2. Security
    - Enable RLS
    - Allow public submissions
    - Restrict viewing to authenticated users
*/

-- Drop existing table and recreate
DROP TABLE IF EXISTS form_submissions;

CREATE TABLE form_submissions (
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

-- Create simple, permissive policies
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

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();