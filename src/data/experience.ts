export interface Experience {
    id: string
    role: string
    organization: string
    period?: string
    summary?: string
}

export const experience: Experience[] = [
     {
    id: 'mckinsey-ghd',
    role: 'GHD',
    organization: 'McKinsey & Company',
    period: 'AUG 2026 – PRESENT',
  },
  {
    id: 'emerson',
    role: 'Infrastructure Engineer / Sys Admin',
    organization: 'Emerson',
    period: 'JAN 2026 – AUG 2026',
  },
]

