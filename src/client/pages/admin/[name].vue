<script setup lang="ts">
import { AdminLayout } from '@sidekick-coder/zenith-kit/client';
</script>

<template>
    <admin-layout>
            <div class="flex h-full w-full items-center justify-center">
                <h1 class="text-4xl font-bold">Hello {{ $route.parmas.name }}</h1>
            </div>
    </admin-layout>
</template>
