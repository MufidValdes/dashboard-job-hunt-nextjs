import React, { FC } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from '../constants';
import ButtonActionTable from '../ButtonActionTable';

interface ApplicantsProps {
  
}

const Applicants: FC<ApplicantsProps> = ({  }) => {
  return (
    <div className="mt-10">
    <Table>
        <TableHeader>
            <TableRow>
                {JOB_APPLICANTS_COLUMNS.map(
                    (item: string, i: number) => (
                        <TableHead key={item + i}>{item}</TableHead>
                    )
                )}
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {JOB_APPLICANTS_DATA.map((item: any, i: number) => (
                <TableRow key={item.nama + i}>
                    <TableCell>{item.nama}</TableCell>
                    <TableCell>
                        {item.AappliedDate}
                    </TableCell>
                    <TableCell>
                        <ButtonActionTable url="/job-detail/1"/>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</div>
  )
}

export default Applicants;