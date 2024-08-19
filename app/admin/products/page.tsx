import EmptyList from "@/components/global/EmptyList";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { fetchAdminProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";

async function ItemPage() {
    const items = await fetchAdminProducts();
    if (items.length === 0) return <EmptyList />;
    return (
        <section>
            <Table>
                <TableCaption className='capitalize'>
                    total products : {items.length}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => {
                        const { id: productId, name, company, price } = item;
                        return (
                            <TableRow key={productId}>
                                <TableCell>
                                    <Link
                                        href={`/products/${productId}`}
                                        className='underline text-muted-foreground tracking-wide capitalize'
                                    >
                                        {name}
                                    </Link>
                                </TableCell>
                                <TableCell>{company}</TableCell>
                                <TableCell>{formatCurrency(price)}</TableCell>
                                <TableCell className='flex items-center gap-x-2'>
                                    actions
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </section>
    );
}
export default ItemPage;
