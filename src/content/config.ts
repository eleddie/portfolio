import { z, defineCollection } from 'astro:content';

const personalCollection = defineCollection({
    type: 'content',
    schema: {
        role: z.string(),
        degree: z.string(),
        school: z.string(),
        year: z.string(),
        location: z.string(),
    }
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: {
        title: z.string(),
        url: z.string().url(),
        tech: z.string(),
        image: z.array(z.string()),
    }
});

export const collections = {
    // 'personal': personalCollection,
    // 'projects': projectsCollection,
};

