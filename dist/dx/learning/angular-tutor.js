import chalk from 'chalk';
export class AngularTutor {
    /**
     * Explains a specific Angular concept as part of the modernization process.
     */
    static teach(concept) {
        const lessons = {
            standalone: {
                title: 'Standalone Components',
                content: 'Standalone components eliminate the need for NgModules, making your app easier to reason about and tree-shake.'
            },
            signals: {
                title: 'Angular Signals',
                content: 'Signals provide a more reactive and efficient way to manage state, leading to better performance and simpler code.'
            },
            hydration: {
                title: 'Client-side Hydration',
                content: 'Hydration improves SEO and perceived performance by reusing server-rendered DOM on the client.'
            }
        };
        const lesson = lessons[concept];
        console.log(`\n${chalk.bgBlue.white.bold(` 🎓 Learning: ${lesson.title} `)}`);
        console.log(lesson.content);
    }
}
