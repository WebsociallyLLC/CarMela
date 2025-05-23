import dynamic from 'next/dynamic';

export function loadSection(section: string, version: string) {
  return dynamic(() => import(`@/components/sections/${section}/${version}`));
}

export function loadShared(section: string) {
  return dynamic(() => import(`@/components/shared/${section}`));
}
