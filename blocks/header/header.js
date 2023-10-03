import createTag from '../../utils/tag.js';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const sectionBlock = createTag('section', {
    id: 'naas-header-old', class: 'naas-header-old-section', dataSourceId: 'psc', dataDomain: 'https://www.webdev.servicenow.com', dataVersion: 'v1',
  });

  /** Scripts de la NAAAS */
  // const headerOldCSR = createTag('script', {
  //   src: 'https://www.webdev.servicenow.com/nas/csi/header/v1/headerOldCSR.bundle.js',
  // });
  // const wcAccountMenu = createTag('script', {
  //   src: 'https://www.webdev.servicenow.com/resource_files/global-nav/components/wc-account-menu/wc-account-menu.min.js',
  // });
  // const headerOldCSRCSS = createTag('link', {
  //   href: 'https://www.webdev.servicenow.com/nas/csi/header/v1/headerOldCSR.bundle.css', rel:'preload', as:'style', onload:'this.onload=null;this.rel="stylesheet"' ,
  // });
  // const clientlib1 = createTag('script', {
  //   src: 'https://partnersuccess.webdev.servicenow.com/etc.clientlibs/ds/clientlibs/clientlib-arc-commons.lc-68b329da9893e34099c7d8ad5cb9c940-lc.min.js',
  // });
  // const clientlib2 = createTag('script', {
  //   src: 'https://partnersuccess.webdev.servicenow.com/etc.clientlibs/ds/clientlibs/clientlib-arc-generic.lc-5ffeb17ed5fc5de47676f3e1525313ff-lc.min.js',
  // });

  // let body = document.querySelector('head');

  // body.append(headerOldCSR);
  // body.append(wcAccountMenu);
  // body.append(headerOldCSRCSS);
  // body.append(clientlib1);
  // body.append(clientlib2);

  /**  Append del section Id para llenar la NAAS  */
  block.append(sectionBlock);
}
