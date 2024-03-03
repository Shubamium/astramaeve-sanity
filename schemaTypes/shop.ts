import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'shop',
  title: 'Shop',
  type: 'document',
	fields: [
		defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
		defineField({
			name:'price',
			type:'string',
		}),
		defineField({
			name:'buy_link',
			type:'url'
		}),
		defineField({
			name:'image',
			type:'image'
		})
	],

})
