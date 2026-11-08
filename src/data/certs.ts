export interface Certs{
    id: string
    name: string
    issuer: string
    kind: 'certification' | 'course'
    date?: string
    url?: string

}

export const certs: Certs[] = [
{
    id: 'az-900',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    kind: 'certification',
    date: 'September 6, 2026',
    url: 'https://learn.microsoft.com/en-us/users/sebastianvargascarvajal-9115/credentials/ae8538085eac3bca',
},
{
    id: 'oci-foundations',
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    kind: 'certification',
    date: '19 October 2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1FCE5213991168A255B3005F0FEFF21C8BB3E65F6E509BD2883CFE242DBD42F4',
  },
  {
    id: 'oci-ai-foundations',
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    kind: 'certification',
    date: '20 September 2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=AB1185DA2113FA0FC8DB2F14779F517BA44809F881B95427CF4684E1ECD43F18',
  },
  {
    id: 'oci-gen-ai',
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    kind: 'certification',
    date: '17 October 2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5E76C47FE103AA6820BDAACB09E7134048ACD31B592603BD1A10134DD42B35C5',
  },
   {
    id: 'oci-multicloud',
    name: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional',
    issuer: 'Oracle',
    kind: 'certification',
    date: '31 October 2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5E76C47FE103AA6820BDAACB09E7134048ACD31B592603BD1A10134DD42B35C5',
  },
   {
    id: 'snowflake-sql',
    name: 'Introduction to Snowflake SQL',
    issuer: 'DataCamp',
    kind: 'course',
  },
  {
    id: 'kaggle-adv-sql',
    name: 'Advanced SQL',
    issuer: 'Kaggle',
    kind: 'course',
  },
]
