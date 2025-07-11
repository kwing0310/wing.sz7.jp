<template>
  <component
    :is="component.element"
    v-bind="{ ...component.props }"
    :class="buttonClass"
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
type Props = {
  element?: 'button' | 'submit' | 'anchor' | 'nuxt-link';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  text?: string;
  type?: string;
  href?: string;
  target?: string;
  to?: string;
};

const { element = 'button', color = 'default', text = '', type = '', href = '', target = '', to = '' } = defineProps<Props>();

const emit = defineEmits<{
  (e: 'onClick'): void;
}>();

const onClick = () => {
  emit('onClick');
};

const buttonProps = {
  type: type,
  color: color,
  onClick,
};

const anchorProps = {
  href: href,
  color: color,
  target: target,
};

const nuxtLinkProps = {
  to: to,
  color: color,
  target: target,
};

const component = computed(() => {
  switch (element) {
    case 'button':
      return {
        element: 'button',
        props: buttonProps,
      };
    case 'anchor':
      return {
        element: 'a',
        props: anchorProps,
      };
    case 'nuxt-link':
      return {
        element: resolveComponent('NuxtLink'),
        props: nuxtLinkProps,
      };
    default: {
      return {
        element: 'button',
        props: buttonProps,
      };
    }
  }
});

const buttonClass = computed(() => {
  return `ui-button ui-button-${color}`;
});
</script>

<style scoped lang="scss">
.ui-button {
  display: inline-block;
  text-align: center;
  min-width: 5em;
  padding: 0.5em;
  font-size: 1em;
  color: var(--fg);
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  &-default {
    background: var(--secondary);
    border: 1px solid var(--darkgray);
  }

  &-primary {
    background: var(--primary);
  }

  &-success {
    background: var(--success);
  }

  &-warning {
    background: var(--warning);
  }

  &-error {
    background: var(--error);
  }
}
</style>
