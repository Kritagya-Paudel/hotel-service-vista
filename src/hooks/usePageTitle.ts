import { useEffect } from 'react';

/** Sets the document title (and meta description) for a page. */
export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute('content', description);
    }
  }, [title, description]);
}
