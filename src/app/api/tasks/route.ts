import { TaskDocument, TaskModel } from '@/models/task';
import { connectDB } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectDB();
    const Alltasks: TaskDocument[] = await TaskModel.find()

    return NextResponse.json({ message: "タスク取得成功", tasks: Alltasks });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic'; // This will make the route dynamic and not cache the response