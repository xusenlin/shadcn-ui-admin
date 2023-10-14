import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Loader2} from "lucide-react";
import {Pagination} from "@/components/ui/pagination.tsx";

export const Task = () => {
    return (
        <>
            <div className="flex flex-col space-y-1.5 px-6">
                <div className="text-2xl font-semibold">Task</div>
                <div className="text-sm text-muted-foreground">Deploy your new project in one-click.</div>
            </div>
            <div className="p-6">
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow key={1} >
                                <TableHead  className="h-10">
                                    Task
                                </TableHead>
                                <TableHead className="h-10">
                                    Title
                                </TableHead>
                                <TableHead className="h-10">
                                    Status
                                </TableHead>
                                <TableHead className="h-10">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="h-10">
                                    TASK-8782
                                </TableCell>
                                <TableCell className="h-10 ">
                                    TASK-8782
                                </TableCell>
                                <TableCell className="h-10">
                                    <div className="flex items-center">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                        In Progress
                                        {/*Todo*/}
                                        {/*Done*/}
                                    </div>
                                </TableCell>
                                <TableCell className="h-10">
                                    TASK-8782
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-4">
                    <Pagination/>
                </div>
            </div>
        </>
    )
}
