/*
  # Fix Contact Submissions RLS Policies

  1. Changes
    - Drop existing RLS policies for contact_submissions table
    - Create new policies that:
      - Allow anyone to submit contact forms (INSERT)
      - Allow authenticated users to view all submissions (SELECT)
      
  2. Security
    - Maintains security by ensuring only authenticated users can view submissions
    - Allows public users to submit contact forms without authentication
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON contact_submissions;

-- Create new policies with correct permissions
CREATE POLICY "Enable insert access for public users" 
ON contact_submissions FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users" 
ON contact_submissions FOR SELECT 
TO authenticated 
USING (true);