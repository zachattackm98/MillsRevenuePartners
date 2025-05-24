/*
  # Fix form submissions RLS policies

  1. Changes
    - Drop existing RLS policies
    - Create new policies that properly handle public form submissions
    - Maintain view restrictions for authenticated users only

  2. Security
    - Allow public users to submit forms
    - Keep view access restricted to authenticated users
    - Maintain data validation checks
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable form submissions for everyone" ON form_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON form_submissions;

-- Create new policies
CREATE POLICY "Enable public form submissions"
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