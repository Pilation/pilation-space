export interface Graph{
    pages: GraphNode[];
}

export interface GraphNode {
    id: string;
    name: string;
    description?: string;
    links: Link[];
}

export interface Link {
    source: string;
    target: string;
    value: RelationshipType;
}

export interface Taxonomy {
    pages: TaxonomyNode[];
}

export interface TaxonomyNode {
    id: string;
    name: string;
    description?: string;
    children: TaxonomyNode[];
    links: Link[];
}

export type RelationshipType = 'UsedBy' | 'DependsOn' | 'Parent' | 'Child' | 'InteractsWith' | 'InteractsTo' |  'Encapsulates'
