import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credits',
  title: 'Credits',
  type: 'document',
	fields: [
		defineField({
      name: 'name',
      type: 'string',
    }),
		defineField({
      name: 'role',
      type: 'string',
    }),
		defineField({
      name: 'link',
      type: 'url',
    }),
		defineField({
			name:'pfp',
			title:'Profile Image',
			type:'image'
		})
	],

})
