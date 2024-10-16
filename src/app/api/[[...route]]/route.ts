/**
 * Used documentation
 * https://hono.dev/docs/getting-started/vercel#vercel
 */

import auth from "@/features/auth/server/route";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

import workspaces from "@/features/workspaces/server/route";
const routes = app.route("/auth", auth).route("/workspaces", workspaces);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);

export type AppType = typeof routes;
