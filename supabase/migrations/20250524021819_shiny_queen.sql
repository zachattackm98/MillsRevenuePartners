/*
  # Contact Form Submission System

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, required)
      - `message` (text, required)
      - `status` (text, default: 'new')
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Public can submit forms
    - Only authenticated users can view submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(name) > 0),
  email text NOT NULL CHECK (length(email) > 0),
  company text NOT NULL CHECK (length(company) > 0),
  message text NOT NULL CHECK (length(message) > 0),
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable form submissions for everyone"
  ON form_submissions
  FOR INSERT
  TO public
  WITH CHECK (
    length(name) > 0 AND
    length(email) > 0 AND
    length(company) > 0 AND
    length(message) > 0
  );

CREATE POLICY "Only authenticated users can view submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an updated_at trigger
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