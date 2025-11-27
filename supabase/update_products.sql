-- Complete Migration Script for Products Table
-- Run this in your Supabase SQL Editor to fix the "image" column issue

-- Step 1: Add new columns if they don't exist
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS short_description text,
ADD COLUMN IF NOT EXISTS benefits text[],
ADD COLUMN IF NOT EXISTS how_to_use text,
ADD COLUMN IF NOT EXISTS ingredients text,
ADD COLUMN IF NOT EXISTS tag text,
ADD COLUMN IF NOT EXISTS is_new boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS images text[] DEFAULT '{}';

-- Step 2: Migrate data from old 'image' column to new 'images' array
-- This preserves your existing product images
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'products' AND column_name = 'image') THEN
        UPDATE products 
        SET images = ARRAY[image] 
        WHERE image IS NOT NULL AND (images IS NULL OR images = '{}');
    END IF;
END $$;

-- Step 3: Drop the old 'image' column (this fixes the NOT NULL constraint error)
ALTER TABLE products DROP COLUMN IF EXISTS image;

-- Step 4: Ensure images column has proper default
ALTER TABLE products ALTER COLUMN images SET DEFAULT '{}';
ALTER TABLE products ALTER COLUMN images SET NOT NULL;
