-- Create Supabase Storage bucket for product images
-- Run this in your Supabase SQL Editor

-- Create the storage bucket
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true);

-- Set up storage policies to allow public read and authenticated insert
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'product-images' );

create policy "Authenticated users can upload product images"
on storage.objects for insert
with check ( bucket_id = 'product-images' );

create policy "Authenticated users can update product images"
on storage.objects for update
using ( bucket_id = 'product-images' );

create policy "Authenticated users can delete product images"
on storage.objects for delete
using ( bucket_id = 'product-images' );
