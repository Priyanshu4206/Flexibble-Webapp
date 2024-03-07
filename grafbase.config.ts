import { graph, config } from '@grafbase/sdk'
const g = graph.Standalone()
const user = g.type('User',{
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.ref(Project).list().optional(),
} )
const Project = g.type('Project', {
  title: g.string().length({min: 3}),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.ref(user),
})
export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
})
