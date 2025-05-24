/*
  # Ensure database policies are correctly set
  
  This migration verifies and reinforces the existing policies for contact submissions
  to ensure consistency across deployments.
*/

-- Verify RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Ensure policies exist with correct permissions
DO $$ 
BEGIN
  -- Only create policies if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'contact_submissions_insert_policy'
  ) THEN
    CREATE POLICY "contact_submissions_insert_policy"
      ON contact_submissions
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'contact_submissions_select_policy'
  ) THEN
    CREATE POLICY "contact_submissions_select_policy"
      ON contact_submissions
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;