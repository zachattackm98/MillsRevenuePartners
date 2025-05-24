/*
  # Fix RLS policies for contact submissions

  1. Changes
    - Temporarily disable RLS
    - Drop all existing policies
    - Re-enable RLS
    - Create new policies with correct names and permissions
    
  2. Security
    - Enable public insert access
    - Enable authenticated read access
*/

-- Temporarily disable RLS
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert access for public users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert access for all users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for public" ON contact_submissions;
DROP POLICY IF EXISTS "Enable select for authenticated" ON contact_submissions;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create fresh policies with unique names
CREATE POLICY "contact_submissions_insert_policy"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "contact_submissions_select_policy"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);