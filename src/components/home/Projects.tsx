

import {
    Column,
    Heading,
    RevealFx,
} from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import { work } from "@/resources";

export const ProjectsSection = () => {
    // work.title is "Projects - Merna Hesham", maybe we want just "Projects" or "Featured Work"
    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="projects"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    Projects
                </Heading>
            </RevealFx>

            <Projects />
        </Column>
    );
};
