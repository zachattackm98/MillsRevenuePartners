/*
  # Fix contact submissions RLS policies

  1. Changes
    - Drop existing RLS policies
    - Create new policies with correct permissions
      - Allow public users to insert submissions
      - Allow authenticated users to view submissions

  2. Security
    - Maintain RLS enabled
    - Ensure proper access control
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON contact_submissions;

-- Create new policies with correct permissions
CREATE POLICY "Enable insert access for all users"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);