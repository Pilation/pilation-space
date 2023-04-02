export interface Page {
    id: string;
    displayName: string;
    url: string;
    savedTimeStamp: string; // ISO 8601 format e.g "2018-03-01T00:00:00.000Z"
}

interface SavePageRequest {
  pageId: string;
  pageName: string;
  pageContent: string; // Send me the entire page as markdown (for now).  And ill save it.
}

interface Menu {
    id: string;
}

// Only used when are doing collaboration (in 2 months time)
interface PartialSavePageRequest {
  pageId: string;
  command: string; // TODO : How to derive an id.   LineArray[]Integer-CharacterInteger[]-Operation e.g 1-5-delete, 1-5-insert
  lastSavedTimeStamp: number;
  uniquePosition: number;
  keyStoke: string; // y, n
}



// nameofcompany.clarity.cm/asdf
// clarity.cm/mycompanyname/