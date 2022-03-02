import { Field } from 'payload/types';
import { Type as PageType } from '../collections/Page';

export type Type = {
  type: 'page' | 'custom'
  label: string
  page?: PageType
  url?: string
}

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      label: 'Type',
      defaultValue: 'page',
      options: [
        {
          label: 'Page',
          value: 'page',
        },
        {
          label: 'Custom URL',
          value: 'custom',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'page',
          label: 'Page to link to',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (_, sibLingData) => sibLingData?.type === 'page',
            width: '50%',
          },
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (_, sibLingData) => sibLingData?.type === 'custom',
            width: '50%',
          },
        },
      ],
    },
  ],
};

export default link;
