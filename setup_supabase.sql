-- Create the love_notes table
create table love_notes (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  note_data jsonb
);

-- Enable Row Level Security
alter table love_notes enable row level security;

-- Create policies to allow public access
create policy "Enable insert for everyone" on love_notes for insert with check (true);
create policy "Enable select for everyone" on love_notes for select using (true);
