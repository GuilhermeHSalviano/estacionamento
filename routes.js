import EntryRecord from "./src/components/entryRecord/EntryRecord.vue"
import ExitRecord from "./src/components/exitRecord/ExitRecord.vue"
import PriceRecord from './src/components/priceRecord/PriceRecord.vue'

export const routes = [
    {path: '', component: EntryRecord, title: "Registrar entrada" },
    {path: '/exitRecord', component: ExitRecord, title: "Registrar saída"},
    {path: '/pricerecord', component: PriceRecord, title: 'Tabela de preços'}
]