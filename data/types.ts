export interface Project { n: string; d?: string | null; s: string; role?: string | null; stack?: string[] | null; prob?: string | null; sol?: string | null; flow?: string[] | null; gh?: string; live?: string; viz?: number; extra?: [string, string[]]; }
export interface StackNode { id: string; label: string; x: number; y: number; desc: string; rel: string[]; }
