# Canturi Training Studio

The Canturi boutique training program — built with Next.js 16, Supabase, and Tailwind CSS.

---

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Supabase** (database, auth, row-level security)
- **Tailwind CSS** + Playfair Display / DM Sans fonts
- **Vercel** (hosting)

---

## Getting Started

### 1. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In the Supabase SQL editor, run `supabase/schema.sql` in full
3. Then run `supabase/seed.sql` to populate categories and menu items
4. Copy your project URL and anon key from **Settings → API**

### 2. Configure environment variables

Edit `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Create test users

In Supabase: **Authentication → Users → Invite user** (or Add user).

Create these users, then run the SQL below to set their roles:

```sql
-- Sydney
UPDATE public.users SET role = 'manager', boutique_id = '11111111-0000-0000-0000-000000000001', avatar_initials = 'SI' WHERE email = 'silvia@canturi.com.au';
UPDATE public.users SET role = 'manager', boutique_id = '11111111-0000-0000-0000-000000000001', avatar_initials = 'LU' WHERE email = 'lucia@canturi.com.au';
UPDATE public.users SET role = 'trainee', boutique_id = '11111111-0000-0000-0000-000000000001', name = 'Sarah Jones', avatar_initials = 'SJ' WHERE email = 'sarah.jones@canturi.com.au';

-- Melbourne
UPDATE public.users SET role = 'manager', boutique_id = '11111111-0000-0000-0000-000000000002', avatar_initials = 'AN' WHERE email = 'anna@canturi.com.au';
UPDATE public.users SET role = 'trainee', boutique_id = '11111111-0000-0000-0000-000000000002', name = 'Marcus Reid', avatar_initials = 'MR' WHERE email = 'marcus.reid@canturi.com.au';

-- Brisbane
UPDATE public.users SET role = 'manager', boutique_id = '11111111-0000-0000-0000-000000000003', avatar_initials = 'VI' WHERE email = 'vicky@canturi.com.au';
UPDATE public.users SET role = 'manager', boutique_id = '11111111-0000-0000-0000-000000000003', avatar_initials = 'MA' WHERE email = 'maria@canturi.com.au';
UPDATE public.users SET role = 'trainee', boutique_id = '11111111-0000-0000-0000-000000000003', name = 'Farhana Choudhary', avatar_initials = 'FC' WHERE email = 'farhana.choudhary@canturi.com.au';

-- Head Office (Trish)
UPDATE public.users SET role = 'head_office', avatar_initials = 'TC' WHERE email = 'trish@canturi.com.au';
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Route Map

| Route | Role | Description |
|-------|------|-------------|
| `/login` | All | Sign in |
| `/trainee` | Trainee | Today's Plate — assigned tasks for today |
| `/trainee/menu` | Trainee | Full Menu browse + shadowing keyword search |
| `/trainee/progress` | Trainee | Progress by category |
| `/manager` | Manager | Build Today's Plate — assign tasks to trainees |
| `/manager/sign-off` | Manager | Review completions, add trainer notes + rating |
| `/manager/trainees` | Manager | Trainee progress overview |
| `/head-office` | Head Office | Boutique dashboard + activity feed |

---

## Key Design Decisions

- **Trainer rating is hidden from trainees** — firm decision from scoping
- **Shadowing moments** are self-logged by the trainee from the Menu (not the Plate). `is_shadowing_moment = true`, `plate_id = null`
- **Manager-assigned vs self-logged** are distinguishable in the `completions` table
- **Universal menu items** have `boutique_id = null`; boutique-specific items are linked to a boutique

---

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add the two env vars (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in Vercel project settings
4. Deploy

---

## Phase 2 (Parking Lot)

- Monday.com integration — completion data is structured for clean export
- Notifications (email/in-app) when manager assigns to Plate or trainee completes
- Manager UI to add boutique-specific menu items
- AI agent triggers (post-completion follow-ups, manager digest summaries)
