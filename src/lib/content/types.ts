import type { RouteId } from '$app/types';

export type PublicationState =
	'draft' | 'preview' | 'scheduled' | 'published' | 'withdrawn' | 'superseded';

export type Indexing = 'index' | 'noindex';

export type ReviewFields = {
	owner: string;
	reviewedAt: string;
};

export type PageMetadata = {
	title: string;
	description: string;
	canonicalPath: RouteId;
	indexing: Indexing;
	updatedAt?: string;
};

export type MaintainedRecord = ReviewFields & {
	id: string;
	publicationState: PublicationState;
	metadata: PageMetadata;
};

export type FixedPage = MaintainedRecord & {
	name: string;
	summary: string;
};

export type NavigationItem = {
	label: string;
	href: RouteId;
	prominent?: boolean;
};

export type Site = ReviewFields & {
	name: string;
	tagline: string;
	canonicalOrigin: `https://${string}`;
	navigation: readonly NavigationItem[];
	metadata: PageMetadata;
};

export type ExternalDestinationKind =
	'source' | 'package' | 'api-reference' | 'video' | 'community' | 'commerce';

export type ExternalDestination = ReviewFields & {
	id: string;
	label: string;
	kind: ExternalDestinationKind;
	url: `https://${string}` | `mailto:${string}`;
};

export type Tool = MaintainedRecord & {
	slug: string;
	name: string;
	summary: string;
	status: 'active-development' | 'planned';
	supportingLibrary: Library['id'];
	destinations: readonly ExternalDestination['id'][];
};

export type Library = MaintainedRecord & {
	slug: string;
	name: string;
	crate: string;
	documentedVersion: string;
	summary: string;
	maturity: 'stable' | 'pre-release';
	supportingTool: Tool['id'];
	destinations: readonly ExternalDestination['id'][];
};
