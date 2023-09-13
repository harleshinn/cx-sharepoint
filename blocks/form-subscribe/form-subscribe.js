import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';
import { cleanVariations } from '../../scripts/scripts.js';
import createTag from '../../utils/tag.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

/**
 * decorates the form block
 * @param {Element} block The form block element
 */
export default async function decorate(block) {
  console.log('arrived!');
}

