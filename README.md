# JO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Juan David Orozco


# Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'jo-product-card'
```

``` 

<ProductCard
  product={ product }
  initialValues={{
    count:4,
    maxCount: 10,
  }}
>
  { ({ reset, counter, increasedBy, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )
  }
</ProductCard>

```