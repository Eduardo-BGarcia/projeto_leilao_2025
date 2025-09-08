// package com.leilao.backend.configuracao;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig {

//     @Bean
//     public WebMvcConfigurer corsConfigurer() {
//         return new WebMvcConfigurer() {
//             @Override
//             public void addCorsMappings(CorsRegistry registry) {
//                 registry.addMapping("/**") // Aplica a configuração a todos os endpoints da sua API
//                         .allowedOrigins("http://localhost:3000") // Permite requisições vindas desta origem
//                         .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Define os métodos HTTP permitidos
//                         .allowedHeaders("*") // Permite todos os cabeçalhos na requisição
//                         .allowCredentials(true); // Permite o envio de credenciais (como cookies e tokens de autorização)
//             }
//         };
//     }
// }