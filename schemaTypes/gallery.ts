import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
	fields: [
		defineField({
      name: 'category_name',
      title: 'Category Name',
      type: 'string',
    }),
		defineField({
			name:'image_list',
			title:'Image List',
			type:'array',
			of:[
				{type:'object', fields:[
					{name:'artist',type:'string'},
					{name:'artist_link',type:'url',},
					{name:'image',type:'image'}
				]}
			]
		})
	],

})
