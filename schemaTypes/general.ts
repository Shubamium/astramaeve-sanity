import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
	fields: [
		defineField({
      name: 'preset',
      title: 'Preset ID',
			description: "Set the one you want to use as 'main'. ",
      type: 'string',
    }),
		defineField({
			name:'schedule',
			type:'image',
		}),
		defineField({
			name:'sponsors',
			type:'image',
		})
	],

})
