/*
  # Fix contact submissions RLS policies

  1. Changes
    - Drop existing RLS policies for contact_submissions table
    - Create new policies that allow:
      - Public users to insert new contact submissions
      - Only authenticated users to view submissions
  
  2. Security
    - Maintains read restriction to authenticated users only
    - Allows public submission without authentication
    - Ensures basic data validation through policy conditions
*/

-- Drop existing policies
DROP POLICY IF EXISTS "contact_submissions_insert_policy" ON contact_submissions;
DROP POLICY IF EXISTS "contact_submissions_select_policy" ON contact_submissions;

-- Create new policies
CREATE POLICY "Enable insert for public users"
ON contact_submissions
FOR INSERT
TO public
WITH CHECK (
  -- Basic validation
  length(name) > 0 AND
  length(email) > 0 AND
  length(message) > 0
);

CREATE POLICY "Enable select for authenticated users only"
ON contact_submissions
FOR SELECT
TO authenticated
USING (true);