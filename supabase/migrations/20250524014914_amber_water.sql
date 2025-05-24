/*
  # Fix Contact Form RLS Policies

  1. Changes
    - Temporarily disable RLS
    - Drop all existing policies
    - Re-enable RLS
    - Create new policies for public insert and authenticated read access

  2. Security
    - Enable RLS on contact_submissions table
    - Add policy for public users to insert new submissions
    - Add policy for authenticated users to read submissions
*/

-- Temporarily disable RLS to clean up policies
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert access for public users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert access for all users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON contact_submissions;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create fresh policies
CREATE POLICY "Enable insert for public"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable select for authenticated"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);