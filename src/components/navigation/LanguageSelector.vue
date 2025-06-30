<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()
const { t } = useI18n()
const changeLanguage = (lang: unknown) => {
  if (typeof lang === 'string') {
    locale.value = lang
  }
}
</script>

<template>
  <Select :model-value="locale" @update:model-value="changeLanguage">
    <SelectTrigger>
      <SelectValue :placeholder="locale.toUpperCase()" />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectLabel>Languages</SelectLabel>
        <SelectItem v-for="l in availableLocales" :key="`locale-${l}`" :value="l">
          {{ t(`languageSelector.${l}`) }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
