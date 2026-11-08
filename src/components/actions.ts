export interface AvatarAction {
  /** What the button says: a verb the avatar does with the visitor. */
  label: string;
  /** Where the portal leads. */
  href: string;
  /** What the avatar says when the visitor hovers or focuses this action. */
  line: string;
}

// The avatar's actions, in the order it offers them.
export const actions: AvatarAction[] = [
  {
    label: 'Enter the Knowledge Base',
    href: '/knowledge-base',
    line: 'Everything I think, written down by hand.',
  },
  // TODO(you): add the avatar's other actions here.
];
