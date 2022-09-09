import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/itemList"
import { Form, FormControl, CardGroup } from "react-bootstrap";
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase'

export function ItemListContainer() {

  let { categoryId } = useParams()

  /*  const products = productsGroup.filter((item) => item.category === categoryId) */

  const [filtroBusqueda, setFiltroBusqueda] = useState('')

  const [categoriesWithDiscount] = useState(['xbox'])

  const [isEmptyCategory, setIsEmptyCategory] = useState(false)

  const hasDiscounts = (categoryId) => categoriesWithDiscount.some(category => category === categoryId)

  const editarValorFiltro = (e) => {
    setFiltroBusqueda(e.target.value)
  }

  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    const ItemCollection = db.collection('items')
    ItemCollection.get().then(
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
        console.log(data)
        const itemsFiltrados = data.filter((product) => product.categoryId === categoryId)
        if (!categoryId) {
          setNewProducts(data)
          if (filtroBusqueda) {
            const nuevasConsolasFiltradas = newProducts.filter(product => product.title.toLowerCase().includes(filtroBusqueda.toLowerCase()))
            setNewProducts(nuevasConsolasFiltradas)
          }
        } else {
          setNewProducts(itemsFiltrados)
          if (filtroBusqueda) {
            const nuevasConsolasFiltradas = newProducts.filter(product => product.title.toLowerCase().includes(filtroBusqueda.toLowerCase()))
            setNewProducts(nuevasConsolasFiltradas)
          }
          else if (itemsFiltrados.length === 0) {
            setIsEmptyCategory(true)
          }
        }
      }
    ).catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <Form inline>
        <FormControl className="text-center" type='text' placeholder="Buscar Productos..." style={{ marginBottom: "20px" }}
          value={filtroBusqueda}
          onChange={editarValorFiltro}
        />
      </Form>
      
      <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1, height: '100%'}} >
          <section className="section-name padding-y-sm">
            <div className="container">
              <div className="row">
                {
                  isEmptyCategory ? (<p>Esta categoria actualmente no tiene productos</p>) : (
                    newProducts.map((item) => (
                      <ItemList
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                      />
                    ))
                  )}
              </div>
            </div>
          </section>
          </div>
        </CardGroup>
    </div>
  )
}
