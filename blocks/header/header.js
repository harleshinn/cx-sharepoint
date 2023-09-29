import createTag from '../../utils/tag.js';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const sectionBlock = createTag('section', {
    id: 'naas-header-old', class: 'naas-header-old-section', dataSourceId: 'psc', dataDomain: 'https://www.webdev.servicenow.com', dataVersion: 'v1',
  });
  block.append(sectionBlock);
}
