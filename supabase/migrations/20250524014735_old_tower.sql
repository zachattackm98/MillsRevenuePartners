/*
  # Fix contact submissions RLS policies

  1. Changes
    - Drop existing policies if they exist
    - Create new policies with proper permissions
    - Ensure no conflicts with existing policies

  2. Security
    - Maintain public insert access for contact form submissions
    - Maintain authenticated user read access
*/

DO $$ 
BEGIN
  -- Drop policies if they exist
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Anyone can submit contact form'
  ) THEN
    DROP POLICY "Anyone can submit contact form" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Only authenticated users can view submissions'
  ) THEN
    DROP POLICY "Only authenticated users can view submissions" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Enable insert access for all users'
  ) THEN
    DROP POLICY "Enable insert access for all users" ON contact_submissions;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Enable read access for authenticated users'
  ) THEN
    DROP POLICY "Enable read access for authenticated users" ON contact_submissions;
  END IF;
END $$;

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