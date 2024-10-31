








import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';
import { useState } from 'react';
import localDb from '@yusuf-yeniceri/easy-storage';
import { isEmptyObjectLocDb } from 'common';

export function CookiesBanner() {

    const [cookieVisibility, setCookieVisibility] = useState(true);

    let {cookieBannerAccepted} = localDb.ref('cookieStuff').get();

    if (isEmptyObjectLocDb(cookieBannerAccepted) != null && cookieBannerAccepted)
        return <></>;

  return (
    <Paper withBorder p="lg" radius="md" shadow="md" style={{display: cookieVisibility ? 'inline-block' : 'none', position: 'fixed', zIndex: 999, bottom: 80, left: 0, right: 0}}>
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Çerez Bildirimi
        </Text>
        <CloseButton mr={-9} mt={-9} onClick={() => setCookieVisibility(false)} />
      </Group>
      <Text c="dimmed" fz="xs">
      Bu internet sitesinde, kullanıcı deneyimini geliştirmek ve internet sitesinin verimli çalışmasını sağlamak amacıyla çerezler kullanılmaktadır. Bu internet sitesini kullanarak bu çerezlerin kullanılmasını kabul etmiş olursunuz. Çerezleri nasıl kullandığımız, sildiğimiz ve engellediğimiz ile ilgili detaylı bilgi için lütfen Çerez Politikası sayfasını okuyunuz: <a href='https://hatimdagit.com/cookies'>Çerez Politikası</a>
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="outline" size="xs" onClick={() => {
            localDb.ref('cookieStuff').set({
                cookieBannerAccepted: true});
            setCookieVisibility(false)}}>
          Anladım
        </Button>
      </Group>
    </Paper>
  );
}