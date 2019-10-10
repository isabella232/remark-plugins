const slug = require('remark-slug')
const autolink = require('remark-autolink-headings')

module.exports = {
  name: 'headingLinkablePlugin',
  plugins: [
    slug,
    [
      autolink,
      {
        behavior: 'prepend',
        content: [{ type: 'text', value: '»' }],
        linkProperties: {
          ariaHidden: true,
          className: ['anchor']
        }
      }
    ]
  ]
}