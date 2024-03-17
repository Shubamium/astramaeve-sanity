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
			name:'contact_art',
			title:'Contact Art',
			type:'image',
		}),
		defineField({
			name:'sponsors',
			type:'array',
			of:[{
				type:'object',
				fields:[
					defineField({
						name:'link',
						type:'url',
					}),
					defineField({
						name:'image',
						type:'image',
					})
				]
			}]
		}),
		defineField({
			name:'goals',
			type:'array',
			of:[
				{
					type:'string',
				}
			]
		}),defineField({
			name:'achieved_goals',
			title:'Achieved Goals',
			type:'array',
			of:[
				{
					type:'object',
					fields:[
						{name:'goal',type:'string'},
						{name:'date',type:'string'},
					]
				}
			]
		})
	],

})
