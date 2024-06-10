import { precacheAndRoute } from 'workbox-precaching';

// Precache todas as assets geradas pelo build
precacheAndRoute(self.__WB_MANIFEST);
