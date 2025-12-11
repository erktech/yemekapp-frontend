import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "MISSING",
    keyStartsWith: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 10) || "MISSING"
  });
}
