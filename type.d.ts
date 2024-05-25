interface Destination {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

interface CrewMember {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}

interface Technology {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}
interface DestinationList {
    destinations: Destination[];
}

interface CrewList {
    crew: CrewMember[];
}

interface Technology {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

interface TechnologyList {
    technologies: Technology[];
}
