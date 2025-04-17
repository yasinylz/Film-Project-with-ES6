# Filmify - Basit Film İstesi Uygulaması

Filmify, kullanıcıların popüler filmleri arayabileceği ve detaylarına ulaşabileceği basit ama kullanışlı bir uygulamadır. Kullanıcılar, film listesine göz atabilir, film fragmanlarını izleyebilir ve detaylı bilgi alabilirler. Ayrıca, web sayfasının yönlendirilmesi kullanıcıya bırakılmış olup, basit bir kullanıcı deneyimi sunar.

## Özellikler

- **Film Arama**: Kullanıcılar, film adı ile arama yaparak popüler filmleri bulabilirler.
- **Film Detayları**: Her film için detaylı bilgiler, oyuncular, yıl ve tür gibi bilgileri görüntüleyebilirsiniz.
- **Fragman İzleme**: İlgilendiğiniz filmin fragmanını izleyebilirsiniz.
- **Kullanıcı Dostu Arayüz**: Basit ve anlaşılır bir kullanıcı arayüzü, film aramayı ve izlemeyi kolaylaştırır.
- **Sayfa Yönlendirmesi**: Sayfanın yönlendirmesi, kullanıcıya bırakılmıştır.

## Kullanılan Teknolojiler

- **API (YouTube API, Movie API)**: Film bilgilerini almak ve film fragmanlarını izlemek için kullanılır.
- **JSON**: API'lerden alınan veriler JSON formatında işlenir.
- **Frontend**: HTML, CSS, JavaScript kullanılarak basit ve hızlı bir kullanıcı arayüzü tasarlanmıştır.
- **Backend**: Güvenlik önlemleri için API veri işlemleri sunucu tarafında yapılmaktadır. Böylece API anahtarınız frontend tarafında görünmez.
- **GitHub Pages**: Proje dosyalarını barındırmak için kullanılmıştır.

## Güvenlik

Proje, **API anahtarınızın güvenliğini** sağlamak amacıyla **backend tarafında API veri işlemleri** yapılacak şekilde tasarlanmıştır. Bu sayede API anahtarınız frontend'de gözükmez, böylece anahtarınızın kötüye kullanılma riski ortadan kalkar.

API anahtarı, sadece belirli bir **web sitesi ile sınırlı** olarak yapılandırılmıştır. Yani, yalnızca bu belirli web sitesi API'yi kullanabilir, başka bir yerden gelen istekler engellenir.

## Kullanım

1. Projeyi yerel makinanıza klonlayın:
   ```bash
   git clone https://github.com/yasinylz/Filmify.git
